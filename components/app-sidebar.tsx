"use client"

import * as React from "react"
import { WiStars } from "react-icons/wi";
import { NavGroup } from "@/components/nav-group"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import TransitionLink from "./reusable/TransitionLink";
import DashedSeparator from "./reusable/DashedSeparator";

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
      name: "Tube Light",
      url: "/tubelight",
    },
    // {
    //   name: "Future Deep",
    //   url: "/gradient/futuredeep",
    // },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="pt-20">
      <DashedSeparator position="right" width="100%" height="100%" className="top-[80px]"/>
      <SidebarContent>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="data-[slot=sidebar-menu-button]:!p-1.5"
              >
                <TransitionLink href={'/uispace'}>
                  <span className="flex items-center gap-1 text-base font-medium"><WiStars size={24}/>What&lsquo;s New</span>
                </TransitionLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        {/* <NavMain items={data.navMain} /> */}
        {/* <NavGroup 
          items={data.figmaTemplate} 
          headIcon={'figma'}
          headTitle={'Figma Template'}
        /> */}
        <NavGroup 
          items={data.gradient} 
          headIcon={'figma'}
          headTitle={'Gradient'}
        />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}
