import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="loginContainer flex justify-center items-center h-screen">
      <div className="box h-[30rem] w-[25rem] border border-gray-300 rounded-lg shadow-lg p-6">
        <div className="minContainer login">
          <div className="loginBox w-full px-10 space-y-5">
            {/* Toggle Between Signup & Login */}
            {active ? <Signup /> : <Login />}

            {/* Switch between Login and Signup */}
            <div className="flex justify-center items-center gap-2">
              <span>{active ? "Already have an account?" : "Don't have an account?"}</span>
              <Button
                variant="ghost"
                onClick={() => setActive(!active)}
                aria-label={active ? "Switch to Login" : "Switch to Signup"}
              >
                {active ? "Login" : "Signup"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
