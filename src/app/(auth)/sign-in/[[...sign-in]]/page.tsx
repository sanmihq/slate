import { appConfig } from "@/lib/data/appConfig";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid h-screen place-items-center">
      <SignIn
        forceRedirectUrl={appConfig.links.app}
        path={appConfig.links.signin}
        signUpUrl={appConfig.links.signup}
      />
    </div>
  );
}
