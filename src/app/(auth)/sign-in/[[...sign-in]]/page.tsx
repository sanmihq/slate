import { SignIn } from "@clerk/nextjs";
import { APP_ROUTES } from "@/lib/routes";

export default function Page() {
  return (
    <div className="grid h-screen place-items-center">
      <SignIn
        path={APP_ROUTES.signIn}
        signUpUrl={APP_ROUTES.signUp}
        forceRedirectUrl={APP_ROUTES.home}
      />
    </div>
  );
}
