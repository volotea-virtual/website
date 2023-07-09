import Link from "next/link";

export default function Prefooter() {
    return (
        <div className="bg-volotea-background">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-20 pb-10">
                <h1 className="v7-subtitle sm:v7-subtitle-sm md:v7-subtitle-md lg:v7-subtitle-exc">
                    Are you ready to be part of our family?
                </h1>
            </div>
            <div className="text-center pb-20">
                <Link href="https://vamsys.io/register/vvolotea" target="_blank">
                    <button className="rounded-lg bg-voebtn text-white font-bold leading-5">Join Us</button>
                </Link>
            </div>
        </div>
    );
}