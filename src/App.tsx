import { Auth } from "./components/auth/Auth";
import { ContactSection } from "./components/ContactSection";
import { ExamPrepSection } from "./components/ExamPrepSection";
import { ContactsSection } from "./components/journal/ContactsSection";
import { NetworkSection } from "./components/journal/NetworkSection";
import { RelationsSection } from "./components/journal/RelationsSection";
import { ContentSection } from "./components/library/ContentSection";
import { SimulationsSection } from "./components/library/SimulationsSection";
import { VisualNovelSection } from "./components/library/VisualNovelSection";
import { LMSSection } from "./components/LMSSection";
import { MainContent } from "./components/MainContent";
import { JournalSection } from "./components/prep/JournalSection";
import { PrepTimeSection } from "./components/PrepTimeSection";
import { ReferralSection } from "./components/ReferralSection";
import { SubscriptionSection } from "./components/SubscriptionSection";
import { TechClubSection } from "./components/TechClubSection";
import { ThemeProvider } from "./components/ThemeProvider";
import { VerseSection } from "./components/VerseSection";
import Match from "./components/PvP/Match";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import { SignInCard } from "./components/auth/SignInCard";
import { SignUpCard } from "./components/auth/SignUpCard";
import NotFound from "./components/NotFound";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Auth />}>
            <Route path="/sign-in" element={<SignInCard />} />
            <Route path="/sign-up" element={<SignUpCard />} />
          </Route>

          <Route element={<AppLayout />}>
            <Route path="/" element={<MainContent />} />
            <Route path="/lms" element={<LMSSection />} />
            <Route path="/content" element={<ContentSection />} />
            <Route path="/visual-novel" element={<VisualNovelSection />} />
            <Route path="/simulations" element={<SimulationsSection />} />
            <Route path="/prep-time" element={<PrepTimeSection />} />
            <Route path="/journal" element={<JournalSection />} />
            <Route path="/contacts" element={<ContactsSection />} />
            <Route path="/network" element={<NetworkSection />} />
            <Route path="/relationships" element={<RelationsSection />} />
            <Route path="/verse" element={<VerseSection />} />
            <Route path="/tech-club" element={<TechClubSection />} />
            <Route path="/exam-prep" element={<ExamPrepSection />} />
            <Route path="/subscription" element={<SubscriptionSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/referral" element={<ReferralSection />} />
            <Route path="/match" element={<Match />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
