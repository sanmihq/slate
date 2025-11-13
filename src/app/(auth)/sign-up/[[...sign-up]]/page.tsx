import { SignUp } from "@clerk/nextjs";
import { APP_ROUTES } from "@/lib/routes";

export default function Page() {
  return (
    <div className="grid h-screen place-items-center">
      <SignUp
        path={APP_ROUTES.signUp}
        signInUrl={APP_ROUTES.signIn}
        forceRedirectUrl={APP_ROUTES.home}
      />
    </div>
  );
}
