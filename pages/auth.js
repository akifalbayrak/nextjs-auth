import { useEffect } from "react";
import AuthForm from "../components/auth/auth-form";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

function AuthPage() {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        getSession().then((session) => {
            if (session) {
                router.replace("/");
            } else {
                setIsLoading(false);
            }
        });
    }, [router]);
    return <AuthForm />;
}

export default AuthPage;
