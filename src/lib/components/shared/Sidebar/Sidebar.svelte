<script module lang="ts">
    import { resolve } from "$app/paths";

    export type NavSubItem = {
        title: string;
        url?: string;
        isActive?: boolean;
    };

    export type NavItem = {
        title?: string;
        icon?: any;
        url?: string;
        isActive?: boolean;
        subItems?: NavSubItem[];
        isSeparator?: boolean;
    };

    export type NavGroup = {
        title: string;
        items: NavItem[];
    };

    export type UserProfile = {
        name: string;
        icon?: any;
        role?: string;
    };
</script>

<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import * as Collapsible from "$lib/components/ui/collapsible/index.js";
	import {
		ChevronDown,
		ChevronRight,
		ChevronLeft,
		CircleUser,
		ArrowDownUp
	} from "lucide-svelte";
	import { useSidebar } from "$lib/components/ui/sidebar/index.js";
    import type { Snippet } from "svelte";

    let { 
        class: className,
        items = [], 
        user = { name: "Super Admin", icon: CircleUser },
        footerSnippet = undefined as Snippet | undefined,
        ...restProps 
    }: {
        class?: string,
        items?: NavItem[] | NavGroup[],
        user?: UserProfile,
        footerSnippet?: Snippet,
        [key: string]: any
    } = $props();

    const sidebar = useSidebar();
    
    const isGrouped = $derived(items.length > 0 && 'items' in items[0]);
    const navGroups = $derived(isGrouped ? items as NavGroup[] : []);
    const flatItems = $derived(!isGrouped ? items as NavItem[] : []);
    
    import logoAlkabira from "$lib/assets/img/logo/logo-alkabira.png";
    import logoAlazhar from "$lib/assets/img/logo/logo-alazhar.png";
</script>

<!-- Snippet Render Dinamis -->
{#snippet renderNavItem(item: NavItem)}
    {#if item.isSeparator}
        <div class={sidebar.state === 'expanded' ? "px-4 py-2" : "px-2 py-2"}>
            <Sidebar.Separator class="bg-neutral-200" />
        </div>
    {:else if item.subItems && item.subItems.length > 0}
        <Collapsible.Root open={item.isActive} class="group/collapsible">
            <Sidebar.MenuItem>
                <Collapsible.Trigger>
                    {#snippet child({ props })}
                        <Sidebar.MenuButton 
                            {...props} 
                            isActive={item.isActive} 
                            title={sidebar.state === 'collapsed' ? item.title : undefined}
                            class="py-6 rounded-xl transition-colors font-medium {sidebar.state === 'expanded' ? 'px-2' : 'px-0 justify-center w-full'} {item.isActive ? 'text-[#3B82F6] bg-[#EBF5FF] data-[active=true]:bg-[#EBF5FF] data-[active=true]:text-[#3B82F6]' : 'text-neutral-600 hover:text-blue-600 hover:bg-neutral-50'}"
                        >
                            {#if item.icon}
                                <item.icon class="w-5 h-5 {sidebar.state === 'expanded' ? 'mr-3' : 'mr-0'} {item.isActive ? 'text-[#3B82F6]' : 'text-neutral-500'}" />
                            {/if}
                            {#if sidebar.state === 'expanded'}
                                <span class="text-[15px]">{item.title}</span>
                                <ChevronDown class="w-4 h-4 ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 {item.isActive ? 'text-[#3B82F6]' : 'text-neutral-400'}" />
                            {/if}
                        </Sidebar.MenuButton>
                    {/snippet}
                </Collapsible.Trigger>
                {#if sidebar.state === 'expanded'}
                <Collapsible.Content>
                    <Sidebar.MenuSub class="ml-9 border-none pr-0 space-y-1 py-2">
                        {#each item.subItems as sub, i (sub.title ?? i)}
                            <Sidebar.MenuSubItem>
                                {#if sub.url}
                                    <Sidebar.MenuSubButton 
                                        isActive={sub.isActive}
                                        class="px-2 py-4 rounded-lg text-[15px] {sub.isActive ? 'text-[#2563EB] bg-[#F0F7FF] data-[active=true]:bg-[#F0F7FF] data-[active=true]:text-[#2563EB]' : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 font-normal'}"
                                    >
                                        {#snippet child({ props })}
                                            <a 
                                                href={resolve(sub.url as any)} 
                                                {...props} 
                                            >
                                                {sub.title}
                                            </a>
                                        {/snippet}
                                    </Sidebar.MenuSubButton>
                                {:else}
                                    <Sidebar.MenuSubButton 
                                        isActive={sub.isActive} 
                                        class="px-2 py-4 rounded-lg text-[15px] {sub.isActive ? 'text-[#2563EB] bg-[#F0F7FF] data-[active=true]:bg-[#F0F7FF] data-[active=true]:text-[#2563EB]' : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 font-normal'}"
                                    >
                                        {sub.title}
                                    </Sidebar.MenuSubButton>
                                {/if}
                            </Sidebar.MenuSubItem>
                        {/each}
                    </Sidebar.MenuSub>
                </Collapsible.Content>
                {/if}
            </Sidebar.MenuItem>
        </Collapsible.Root>
    {:else}
        <Sidebar.MenuItem>
            {#if item.url}
                <Sidebar.MenuButton 
                    isActive={item.isActive}
                    class="py-6 rounded-xl transition-colors font-medium {sidebar.state === 'expanded' ? 'px-2' : 'px-0 justify-center w-full'} {item.isActive ? 'text-[#3B82F6] bg-[#EBF5FF] data-[active=true]:bg-[#EBF5FF] data-[active=true]:text-[#3B82F6]' : 'text-neutral-600 hover:text-blue-600 hover:bg-neutral-50'}"
                >
                    {#snippet child({ props })}
                        <a 
                            href={resolve(item.url as any)} 
                            data-sveltekit-noscroll
                            {...props} 
                            title={sidebar.state === 'collapsed' ? item.title : undefined}
                        >
                            {#if item.icon}
                                <item.icon class="w-5 h-5 {sidebar.state === 'expanded' ? 'mr-3' : 'mr-0'} {item.isActive ? 'text-[#3B82F6]' : 'text-neutral-500'}" />
                            {/if}
                            {#if sidebar.state === 'expanded'}
                                <span class="text-[15px]">{item.title}</span>
                            {/if}
                        </a>
                    {/snippet}
                </Sidebar.MenuButton>
            {:else}
                <Sidebar.MenuButton 
                    isActive={item.isActive} 
                    title={sidebar.state === 'collapsed' ? item.title : undefined}
                    class="py-6 rounded-xl transition-colors font-medium {sidebar.state === 'expanded' ? 'px-2' : 'px-0 justify-center w-full'} {item.isActive ? 'text-[#3B82F6] bg-[#EBF5FF] data-[active=true]:bg-[#EBF5FF] data-[active=true]:text-[#3B82F6]' : 'text-neutral-600 hover:text-blue-600 hover:bg-neutral-50'}"
                >
                    {#if item.icon}
                        <item.icon class="w-5 h-5 {sidebar.state === 'expanded' ? 'mr-3' : 'mr-0'} {item.isActive ? 'text-[#3B82F6]' : 'text-neutral-500'}" />
                    {/if}
                    {#if sidebar.state === 'expanded'}
                        <span class="text-[15px]">{item.title}</span>
                    {/if}
                </Sidebar.MenuButton>
            {/if}
        </Sidebar.MenuItem>
    {/if}
{/snippet}

<Sidebar.Root collapsible="icon" class={className} {...restProps}>
	<Sidebar.Header class="pt-6 pb-2 {sidebar.state === 'expanded' ? 'px-4' : 'px-2'}">
        <!-- Logo Area & Collapse Button -->
		<div class="flex relative w-full {sidebar.state === 'expanded' ? 'items-center justify-between' : 'flex-col items-center gap-5'}">
            <!-- Tempat Logo -->
            <div class="flex {sidebar.state === 'expanded' ? 'gap-2 items-center' : 'flex-col gap-3 items-center'} overflow-hidden">
                <img src={logoAlkabira} alt="Al Kabira" class="{sidebar.state === 'expanded' ? 'h-10' : 'h-10'} w-auto object-contain" />
                <img src={logoAlazhar} alt="Al Azhar" class="{sidebar.state === 'expanded' ? 'w-10 h-10' : 'w-12 h-12'} object-contain" />
            </div>
            
            <button 
                onclick={sidebar.toggle} 
                class="w-7 h-7 flex items-center justify-center bg-neutral-600 hover:bg-neutral-700 text-white rounded-md shadow-sm transition-colors shrink-0 {sidebar.state === 'expanded' ? '' : 'mt-1'}"
            >
                {#if sidebar.state === "expanded"}
                    <ChevronLeft class="w-4 h-4" />
                {:else}
                    <ChevronRight class="w-4 h-4" />
                {/if}
            </button>
		</div>
	</Sidebar.Header>

    <div class={sidebar.state === 'expanded' ? "px-4" : "px-2"}>
        <Sidebar.Separator class="my-4 bg-neutral-100" />
    </div>

	<Sidebar.Content>
        {#if isGrouped}
            {#each navGroups as group (group.title)}
                <Sidebar.Group>
                    {#if sidebar.state === 'expanded'}
                        <Sidebar.GroupLabel class="px-4 text-xs font-bold text-neutral-400 uppercase tracking-widest leading-none my-2">
                            {group.title}
                        </Sidebar.GroupLabel>
                    {/if}
                    <Sidebar.Menu class="gap-1.5 px-2">
                        {#each group.items as item, i (item.title ?? i)}
                            {@render renderNavItem(item)}
                        {/each}
                    </Sidebar.Menu>
                </Sidebar.Group>
            {/each}
        {:else}
            <Sidebar.Group>
                <Sidebar.Menu class="gap-1.5 px-2">
                    {#each flatItems as item, i (item.title ?? i)}
                        {@render renderNavItem(item)}
                    {/each}
                </Sidebar.Menu>
            </Sidebar.Group>
        {/if}
	</Sidebar.Content>

    <div class={sidebar.state === 'expanded' ? "px-4" : "px-2"}>
        <Sidebar.Separator class="bg-neutral-100" />
    </div>
	<Sidebar.Footer class="pb-6 pt-4">
        {#if footerSnippet}
            {@render footerSnippet()}
        {:else}
            <Sidebar.Menu class="px-2">
                <Sidebar.MenuItem class={sidebar.state === 'collapsed' ? 'flex justify-center' : ''}>
                    <Sidebar.MenuButton class="text-neutral-700 py-6 rounded-xl hover:bg-neutral-50 font-normal {sidebar.state === 'expanded' ? 'px-2' : 'px-0 justify-center w-full'}">
                        {#if user.icon}
                            <user.icon class="{sidebar.state === 'expanded' ? 'w-6 h-6 mr-3' : 'w-7 h-7 mr-0'} text-neutral-600" />
                        {:else}
                            <CircleUser class="{sidebar.state === 'expanded' ? 'w-6 h-6 mr-3' : 'w-7 h-7 mr-0'} text-neutral-600" />
                        {/if}
                        {#if sidebar.state === 'expanded'}
                            <span class="text-[15px] font-medium text-neutral-800">{user.name}</span>
                            <ArrowDownUp class="w-4 h-4 ml-auto text-neutral-500" />
                        {/if}
                    </Sidebar.MenuButton>
                </Sidebar.MenuItem>
            </Sidebar.Menu>
        {/if}
	</Sidebar.Footer>
</Sidebar.Root>
