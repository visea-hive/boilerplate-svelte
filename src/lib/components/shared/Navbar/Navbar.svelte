<script module lang="ts">
    export type BreadcrumbItem = {
        label: string;
        url?: string;
        isActive?: boolean;
    };

    export type UserProfile = {
        name: string;
        role?: string;
        avatar?: string;
    };
</script>

<script lang="ts">
    import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import * as Avatar from "$lib/components/ui/avatar/index.js";
    import { Search, ChevronDown, MessageSquareText } from "lucide-svelte";

    let {
        class: className = "",
        breadcrumbs = [],
        searchPlaceholder = "Cari Sesuatu",
        user = { name: "Richardoatkitns", role: "Super Admin", avatar: "https://github.com/shadcn.png" },
        hasNotification = true,
        searchValue = $bindable(),
        ...restProps
    }: {
        class?: string;
        breadcrumbs?: BreadcrumbItem[];
        searchPlaceholder?: string;
        user?: UserProfile;
        hasNotification?: boolean;
        searchValue?: string;
        [key: string]: any;
    } = $props();
</script>

<header class="relative flex h-[72px] shrink-0 items-center justify-between gap-4 bg-transparent px-8 w-full {className}" {...restProps}>
    <!-- Kiri: Breadcrumb Dinamis -->
    <div class="flex items-center gap-2 relative z-10 w-full md:w-auto">
        <Breadcrumb.Root>
            <Breadcrumb.List class="text-[15px] sm:text-[16px]">
                {#if breadcrumbs.length === 0}
                    <!-- Fallback / Default jika kosong -->
                    <Breadcrumb.Item>
                        <span class="text-neutral-400 font-normal">Label Menu</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator class="text-neutral-300 mx-1">
                        <span class="text-neutral-300">/</span>
                    </Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Breadcrumb.Page class="text-[#3B82F6] font-medium">Menu Active</Breadcrumb.Page>
                    </Breadcrumb.Item>
                {:else}
                    {#each breadcrumbs as item, i (i)}
                        <Breadcrumb.Item>
                            {#if item.isActive}
                                <Breadcrumb.Page class="text-[#3B82F6] font-medium">{item.label}</Breadcrumb.Page>
                            {:else}
                                {#if item.url}
                                    <Breadcrumb.Link href={item.url} class="text-neutral-400 hover:text-neutral-600 font-normal transition-colors">{item.label}</Breadcrumb.Link>
                                {:else}
                                    <span class="text-neutral-400 font-normal">{item.label}</span>
                                {/if}
                            {/if}
                        </Breadcrumb.Item>
                        
                        {#if i < breadcrumbs.length - 1}
                            <Breadcrumb.Separator class="text-neutral-300 mx-1">
                                <span class="text-neutral-300">/</span>
                            </Breadcrumb.Separator>
                        {/if}
                    {/each}
                {/if}
            </Breadcrumb.List>
        </Breadcrumb.Root>
    </div>

    <!-- Tengah: Input Pencarian Di Tengah Absolut -->
    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center w-[300px] lg:w-[400px]">
        <Search class="absolute left-3 w-[18px] h-[18px] text-neutral-500" />
        <input 
            type="text" 
            placeholder={searchPlaceholder} 
            bind:value={searchValue}
            class="h-11 w-full rounded-xl border border-transparent bg-white shadow-sm pl-10 pr-12 text-[15px] text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-normal"
        />
        <div class="absolute right-2 top-1/2 -translate-y-1/2 rounded bg-neutral-100/80 px-2 py-0.5 text-xs text-neutral-500 font-medium">
            /
        </div>
    </div>

    <!-- Kanan: Notifikasi, Dropdown User -->
    <div class="flex items-center gap-6 relative z-10 w-full md:w-auto justify-end">
            <!-- Tombol Notifikasi Merah Dinamis -->
            <button class="relative rounded-[14px] bg-neutral-700 hover:bg-neutral-800 p-2.5 text-white shadow-sm transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                <MessageSquareText class="w-5 h-5 flex-shrink-0" strokeWidth={2.5} />
                {#if hasNotification}
                    <span class="absolute top-0 right-0 block h-2.5 w-2.5 -translate-y-[10%] translate-x-[10%] rounded-full bg-red-500 ring-2 ring-white"></span>
                {/if}
            </button>

            <!-- Menu Dropdown Pengguna -->
            <DropdownMenu.Root>
                <DropdownMenu.Trigger class="flex items-center gap-3 hover:bg-white/50 p-1.5 pr-2 rounded-xl transition-colors group outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer">
                    <Avatar.Root class="h-10 w-10 rounded-full border border-neutral-200 bg-white">
                        <Avatar.Image src={user?.avatar} alt={user?.name || "User"} class="object-cover" />
                        <Avatar.Fallback class="bg-blue-50 text-blue-700 font-semibold">{(user?.name || "U").charAt(0)}</Avatar.Fallback>
                    </Avatar.Root>
                    <div class="hidden lg:flex flex-col items-start gap-1 justify-center leading-none text-left">
                        <span class="text-[14px] font-semibold text-neutral-800">{user?.name || "User"}</span>
                        <span class="text-[12px] font-normal text-neutral-500">{user?.role || "Member"}</span>
                    </div>
                    <ChevronDown class="w-4 h-4 text-neutral-500 transition-transform duration-200 group-data-[state=open]:rotate-180 ml-1 hidden lg:block" />
                </DropdownMenu.Trigger>
                
                <DropdownMenu.Content align="end" class="w-56 rounded-xl mt-2 border-neutral-200 shadow-md">
                    <DropdownMenu.Label class="font-normal px-3 py-2.5">
                        <div class="flex flex-col space-y-1">
                            <p class="text-sm font-medium leading-none text-neutral-900">{user?.name || "User"}</p>
                            <p class="text-[13px] leading-none text-neutral-500">{user?.role || "Member"}</p>
                        </div>
                    </DropdownMenu.Label>
                    <DropdownMenu.Separator class="bg-neutral-100" />
                    <DropdownMenu.Item class="rounded-lg cursor-pointer my-1 focus:bg-blue-50 focus:text-blue-600">
                        Profil Saya
                    </DropdownMenu.Item>
                    <DropdownMenu.Item class="rounded-lg cursor-pointer my-1 focus:bg-blue-50 focus:text-blue-600">
                        Pengaturan
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator class="bg-neutral-100" />
                    <DropdownMenu.Item class="rounded-lg text-red-600 cursor-pointer my-1 focus:text-red-700 focus:bg-red-50 font-medium">
                        Keluar
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
</header>
