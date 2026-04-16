<script lang="ts">
    import * as SidebarProvider from "$lib/components/ui/sidebar/sidebar-provider.svelte";
    import * as SidebarInset from "$lib/components/ui/sidebar/sidebar-inset.svelte";
    import { Sidebar } from "$lib/components/shared/Sidebar";
    import { Navbar } from "$lib/components/shared/Navbar";
    import { LayoutDashboard, Palette, Component, PanelsTopLeft, AppWindow, PanelLeftClose, LayoutList, ToggleRight, Calendar, CheckSquare, CircleDot, LayoutGrid, ChevronDown, FileText, Columns, LayoutTemplate } from "lucide-svelte";
    import { page } from "$app/state";
    import Toast from "$lib/components/shared/Toast/toast.svelte";
    let { children } = $props();

    // Data menu dokumentasi untuk Sidebar
    let navItems = $derived([
        { 
            title: "General", 
            items: [
                { title: "Dashboard", url: "/", icon: LayoutDashboard, isActive: page.url.pathname === '/' }
            ] 
        },
        {
            title: 'Foundations',
            items: [
                { title: "Colors Palette", url: "/colors", icon: Palette, isActive: page.url.pathname === '/colors' }
            ]
        },
        {
            title: 'Form & Input',
            items: [
                { title: "Input", url: "/input", icon: Component, isActive: page.url.pathname === '/input' },
                { title: "Select", url: "/select", icon: ChevronDown, isActive: page.url.pathname === '/select' },
                { title: "Textarea", url: "/textarea", icon: Component, isActive: page.url.pathname === '/textarea' },
                { title: "Checkbox", url: "/checkbox", icon: CheckSquare, isActive: page.url.pathname === '/checkbox' },
                { title: "RadioButton", url: "/radio-button", icon: CircleDot, isActive: page.url.pathname === '/radio-button' },
                { title: "Switch", url: "/switch", icon: ToggleRight, isActive: page.url.pathname === '/switch' },
                { title: "Datepicker", url: "/datepicker", icon: Calendar, isActive: page.url.pathname === '/datepicker' },
                { title: "Form & Supervalidate", url: "/form", icon: FileText, isActive: page.url.pathname === '/form' }
            ]
        },
        {
            title: 'Navigation & Layout',
            items: [
                { title: "Sidebar", url: "/sidebar", icon: PanelLeftClose, isActive: page.url.pathname === '/sidebar' },
                { title: "Navbar", url: "/navbar", icon: AppWindow, isActive: page.url.pathname === '/navbar' },
                { title: "Breadcrumbs", url: "/breadcrumbs", icon: LayoutGrid, isActive: page.url.pathname === '/breadcrumbs' },
                { title: "Tab", url: "/tab", icon: PanelsTopLeft, isActive: page.url.pathname === '/tab' },
                { title: "Stepper", url: "/stepper", icon: LayoutList, isActive: page.url.pathname === '/stepper' }
            ]
        },
        {
            title: 'UI Actions & Data',
            items: [
                { title: "Button", url: "/button", icon: Component, isActive: page.url.pathname === '/button' },
                { title: "Dropdown", url: "/dropdown", icon: AppWindow, isActive: page.url.pathname === '/dropdown' },
                { title: "Accordion", url: "/accordion", icon: Component, isActive: page.url.pathname === '/accordion' },
                { title: "Badge", url: "/badge", icon: Component, isActive: page.url.pathname === '/badge' },
                { title: "Canban", url: "/canban", icon: Columns, isActive: page.url.pathname === '/canban' }
            ]
        },
        {
            title: 'Feedback',
            items: [
                { title: "Toast", url: "/toast", icon: AppWindow, isActive: page.url.pathname === '/toast' },
                { title: "Modal", url: "/modal", icon: LayoutTemplate, isActive: page.url.pathname === '/modal' }
            ]
        }
    ]);


    // Logika sederhana untuk merangkai breadcrumb berdasarkan path URL saat ini
    let breadcrumbs = $derived.by(() => {
        const path = page.url.pathname;
        if (path === '/') return [{ label: 'Dashboard', isActive: true }];
        
        const pathName = path.substring(1);
        const capitalized = pathName.charAt(0).toUpperCase() + pathName.slice(1);
        
        return [
            { label: 'Components', url: '#' },
            { label: capitalized, isActive: true }
        ];
    });
</script>

<div class="relative flex min-h-screen flex-col bg-neutral-100">
    <SidebarProvider.default>
        <!-- Sidebar Navigation Primer Kiri -->
        <Sidebar items={navItems} />

        <!-- Area Konten Utama -->
        <SidebarInset.default class="flex flex-col flex-1 w-full min-w-0 transition-all bg-neutral-50/50">
            <!-- Navbar Primer Atas -->
            <Navbar breadcrumbs={breadcrumbs} searchPlaceholder="Cari dokumentasi..." />
            
            <main class="relative z-10 flex-1 w-full overflow-y-auto">
                {@render children()}
            </main>
        </SidebarInset.default>
    </SidebarProvider.default>

<Toast/>
</div>
