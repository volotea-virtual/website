import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { join } from "path";


const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Events", href: "#events", current: false},
];

function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className=" fixed top-0 right-0 border-b backdrop-blur-sm bg-white/90 z-20">
            {({ open }: {open: any}) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-betwen">
                            <div className="flex flex-1 items-center justify-start">
                                <div className="flex flex-shrink-0 items-center md:pl-0">
                                    <Link href="/">
                                        <Image className="block h-8 w-auto" src="" alt="vVOE - Volotea Virtual Airline" width={150} height={150} quality={90} sizes="100vh"></Image>
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-5 items-center">
                                        {navigation.map((item) =>(
                                            <Link 
                                                key={item.name} href={item.href} className={classNames(
                                                    item.current ? "text-volotea font-medium" : "text-volotea font-medium hover:underline", "text-volotea font-medium"
                                                )} aria-current={item.current ? "page" : undefined}>{item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-10 sm:right-0 flex items-center gap-2">
                                    <Link href="https://vamsys.io/login/vvolotea" target="_blank">
                                        <button className="bg-voebtn2 text-volotea-brand px-4 p-2 text-base font-medium rounded-full">
                                            Crew Login
                                        </button>
                                    </Link>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                    {/* Mobile Menu */}
                                    <Disclosure.Button className="inline flex items-center justify-center rounded-md text-volotea">
                                        <span className="sr-only">Open Main Menu</span>
                                        {
                                            open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true"></XMarkIcon>
                                            ): (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true"></Bars3Icon>
                                            )
                                        }
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-4 min-h-screen border-t border-neutral-200">
                            {
                                navigation.map((item) => (
                                    <Disclosure.Button 
                                        key={item.name} as="a" href={item.href}
                                        className={classNames(
                                            item.current ? "text-volotea hover:tex-volotea-brand" : "text-volotea hover:text-volotea-brand",
                                            "block py-4 font-medium border-b"
                                        )} aria-current={item.current ? "page": undefined}> {item.name} </Disclosure.Button>
                                ))
                            }
                            <Link href="https://vamsys.io/login/vvolotea" target="_blank">
                                <button className="mt-12 bg-voebtn text-volotea-brand px-4 p-3 font-medium rounded-full w-full">
                                    Crew Login
                                </button>
                            </Link>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}