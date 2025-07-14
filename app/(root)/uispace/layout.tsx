'use client';

import * as React from "react"
import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/reusable/Footer";
import TransitionLink from "@/components/reusable/TransitionLink";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { WiStars } from "react-icons/wi";
import { PiCircleHalfLight } from "react-icons/pi";
import DashedSeparator from "@/components/reusable/DashedSeparator";


// This is sample data.
const data = {
  figmaTemplate: [
    {
      name: "All",
      url: "/uispace",
    },
    {
      name: "Hero",
      url: "#",
    },
    {
      name: "Team",
      url: "#",
    },
  ],
  gradient: [
    {
      name: "All",
      url: "/all",
    },
    {
      name: "Hero",
      url: "/hero",
    },
    {
      name: "TubeLight",
      url: "/tubelight",
    },
    // {
    //   name: "Future Deep",
    //   url: "/gradient/futuredeep",
    // },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
})  {
  
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <main className="flex-1 w-full pt-20 md:pt-0">
        <header className="w-full h-full flex flex-col p-4 gap-5 md:hidden">
          <div>
            <TransitionLink href="/uispace/whats-new" className="w-fit">
              <span className="flex items-center gap-1 text-base font-medium"><WiStars size={24}/>What&lsquo;s New</span>
            </TransitionLink>
          </div>
          <div className="relative border-zinc-200 dark:border-zinc-800 border-0.1 rounded-xl">
            <DashedSeparator position="vertical" width="100%" height="calc(100% + 20px)" className="-top-[10px] opacity-50"/>
            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="flex w-full flex-col px-4 py-2"
            >
              <div className="flex items-center justify-between ">
                <h4 className="flex items-center gap-2 text-sm font-semibold">
                  <PiCircleHalfLight size={20}/>Gradient
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-8">
                    <ChevronDown size={20}/>
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="flex flex-col gap-2">
                <div className="my-2 w-full flex flex-wrap gap-1">
                  {data.gradient.map((item, index) => {
                    return(
                      <TransitionLink key={index} href={'/uispace/gradient/' + item.url} className="font-semibold text-xs rounded-lg text-zinc-700 bg-zinc-100 px-3 py-1 border-0.05 border-zinc-200 dark:border-zinc-800">
                        {item.name}
                      </TransitionLink>
                    )
                  })}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </header>
        <SidebarProvider className="relative">
            <AppSidebar className="sticky top-0 "/>
            <SidebarInset className="md:pt-20 ">
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                {children}
              </div>
            </SidebarInset>
        </SidebarProvider>
        <Footer/>
      </main>
    </>
  );
}
