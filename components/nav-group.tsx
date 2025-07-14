"use client"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import TransitionLink from "./reusable/TransitionLink"

export function NavGroup({
  items,
  headTitle
}: {
  items: {
    name: string
    url: string
  }[],
  headIcon: string
  headTitle: string
}) {

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>
          {headTitle}
      </SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <TransitionLink href={
                (headTitle === 'Gradient' ? (
                  "/uispace/gradient" + item.url
                ) : (
                  "/uispace/figma-template" + item.url
                ))
                }>
                <span>{item.name}</span>
              </TransitionLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <span>Adding more soon😉</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  )
}
