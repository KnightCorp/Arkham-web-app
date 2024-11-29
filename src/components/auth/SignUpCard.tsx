import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignUpSchema } from "@/lib/ZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheckBig, Loader2, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { PlayFab, PlayFabClient } from "playfab-sdk";

PlayFab.settings.titleId = import.meta.env.VITE_PLAYFAB_TITLE_ID;

// interface SignUpCardProps {
//   setMode: (mode: "sign-in" | "sign-up") => void;
// }

export const SignUpCard = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [pending, setPending] = useState(false);
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
    try {
      setPending(true);

      const res = PlayFabClient.RegisterPlayFabUser(
        {
          TitleId: PlayFab.settings.titleId,
          Email: values.email,
          Password: values.password,
          RequireBothUsernameAndEmail: false,
        },
        (error, result) => {
          console.log(error, result);
          if (error?.error === "EmailAddressNotAvailable") {
            setSuccess("");
            setError("Email already exists");
            return;
          } else if (error) {
            setSuccess("");
            setError(error.errorMessage);
            return;
          }
          setError("");
          setSuccess("Account created successfully!");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      );
      console.log(res);
      console.log(values);
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong. Try again later.");
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <Card className="relative z-10 bg-opacity-80 p-6 rounded-lg max-w-md w-full bg-transparent border-none">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="flex flex-col gap-4 text-white text-3xl md:text-4xl">
          Sign up to continue
        </CardTitle>
        <CardDescription className="text-white/80 text-sm md:text-base font-detective">
          Use your email service to continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="mb-6 flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm md:text-base text-destructive">
          <TriangleAlert className="size-4" />
          <p>{error}</p>
        </div>
      )}
      {!!success && (
        <div className="mb-6 flex items-center gap-x-2 rounded-md bg-green-400/25 p-3 text-sm md:text-base text-green-400">
          <CircleCheckBig className="size-4" />
          <p>{success}</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div className="flex flex-col gap-2 mb-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Email"
                        className="text-white placeholder:text-white placeholder:text-sm md:placeholder:text-lg bg-white/30 rounded-xl h-12 w-full placeholder:font-serif"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        placeholder="Password"
                        className="text-white placeholder:text-white placeholder:text-sm md:placeholder:text-lg bg-white/30 rounded-xl h-12 w-full placeholder:font-serif"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        {...field}
                        placeholder="Confirm Password"
                        className="text-white placeholder:text-white placeholder:text-sm md:placeholder:text-lg bg-white/30 rounded-xl h-12 w-full placeholder:font-serif"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full text-base md:text-lg py-5 bg-white rounded-full hover:bg-white/90 text-black/85 shadow-lg shadow-red-500/50 hover:shadow-red-400/70 transition-shadow"
              disabled={pending || form.formState.isSubmitting}
            >
              {pending || form.formState.isSubmitting ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Signing up...
                </>
              ) : (
                "Sign up"
              )}
            </Button>
          </form>
        </Form>
        <Separator />
        <div className="flex gap-6 justify-center mt-4">
          <FaGoogle
            className="cursor-pointer bg-white/20 p-4 rounded-full hover:shadow-lg transition-transform duration-300 hover:scale-105"
            size="50"
          />
          <FaInstagram
            className=" cursor-pointer bg-white/20  p-4 rounded-full hover:shadow-lg transition-transform duration-300 hover:scale-105"
            size="50"
          />
          <FaLinkedin
            className=" cursor-pointer bg-white/20 p-4 rounded-full hover:shadow-lg transition-transform duration-300 hover:scale-105"
            size="50"
          />
        </div>
        <p className="text-sm  text-muted-foreground flex justify-center items-center text-white">
          Already have an account?
          <Link
            to="/sign-in"
            className={`cursor-pointer text-brown hover:underline ${buttonVariants(
              { variant: "link" }
            )}`}
          >
            Sign in
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
