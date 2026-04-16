<script lang="ts">
    import { 
        Palette, 
        Copy, 
        ShieldAlert, 
        Info, 
        Globe,
        Droplet,
        Type,
        Layout
    } from "lucide-svelte";
    import { toast } from "svelte-sonner";
    import Badge from "$lib/components/shared/Badge/Badge.svelte";

    const colorGroups = [
        {
            category: "Brand Essentials",
            icon: Palette,
            description: "Warna identitas utama aplikasi. Digunakan untuk Button Primary, elemen aktif, dan branding.",
            shades: [
                { name: "Primary", variable: "--brand-primary", tailwind: "bg-brand-primary", description: "Warna utama CTA dan Branding." },
                { name: "Hover", variable: "--brand-hover", tailwind: "bg-brand-hover", description: "Warna state hover untuk elemen primary." },
                { name: "Selected", variable: "--brand-selected", tailwind: "bg-brand-selected", description: "Warna state selected/active." },
                { name: "Press", variable: "--brand-press", tailwind: "bg-brand-press", description: "Warna state saat elemen ditekan." },
                { name: "Disable", variable: "--brand-disable", tailwind: "bg-brand-disable", description: "Warna untuk elemen brand yang dinonaktifkan." },
                { name: "Shade", variable: "--brand-shade", tailwind: "bg-brand-shade", description: "Background lembut dengan tint brand." }
            ]
        },
        {
            category: "Background Essentials",
            icon: Layout,
            description: "Warna untuk berbagai tingkatan background container dan halaman.",
            shades: [
                { name: "BG Primary", variable: "--bg-primary", tailwind: "bg-bg-primary", description: "Background utama container atau kartu." },
                { name: "BG Secondary", variable: "--bg-secondary", tailwind: "bg-bg-secondary", description: "Background sekunder (biasanya untuk list/hover)." },
                { name: "BG Tertiary", variable: "--bg-tertiary", tailwind: "bg-bg-tertiary", description: "Background aksen atau penekanan." },
                { name: "BG Shade", variable: "--bg-shade", tailwind: "bg-bg-shade", description: "Background kanvas aplikasi (paling bawah)." },
                { name: "Child Selected", variable: "--bg-child-selected", tailwind: "bg-bg-child-selected", description: "Highlight untuk menu anak yang terpilih." }
            ]
        },
        {
            category: "Text Essentials",
            icon: Type,
            description: "Warna untuk feedback tekstual dan status informasi.",
            shades: [
                { name: "Success", variable: "--text-success", tailwind: "bg-text-success", description: "Teks untuk status berhasil." },
                { name: "Info", variable: "--text-info", tailwind: "bg-text-info", description: "Teks untuk informasi umum." },
                { name: "Warning", variable: "--text-warning", tailwind: "bg-text-warning", description: "Teks untuk peringatan/atensi." },
                { name: "Error", variable: "--text-error", tailwind: "bg-text-error", description: "Teks untuk pesan kesalahan." },
                { name: "Disable", variable: "--text-disable", tailwind: "bg-text-disable", description: "Teks untuk konten yang tidak aktif." }
            ]
        },
        {
            category: "Icon Essentials",
            icon: Droplet,
            description: "Warna standar untuk ikon agar tetap konsisten dengan identitas brand.",
            shades: [
                { name: "Icon Primary", variable: "--icon-primary", tailwind: "bg-icon-primary", description: "Ikon utama atau branding." },
                { name: "Icon Secondary", variable: "--icon-secondary", tailwind: "bg-icon-secondary", description: "Ikon pendukung atau sekunder." },
                { name: "Icon Tertiary", variable: "--icon-tertiary", tailwind: "bg-icon-tertiary", description: "Ikon dekoratif atau aksen." },
                { name: "Icon Dark", variable: "--icon-dark", tailwind: "bg-neutral-800", description: "Ikon dengan kontras tinggi." }
            ]
        },
        {
            category: "Status Essentials",
            icon: ShieldAlert,
            description: "Warna untuk feedback visual status sistem dan interaksi pengguna.",
            shades: [
                { name: "Success", variable: "--status-success-bg", tailwind: "bg-status-success", description: "Warna background status sukses." },
                { name: "Info", variable: "--status-info-bg", tailwind: "bg-status-info", description: "Warna background status informasi." },
                { name: "Warning", variable: "--status-warning-bg", tailwind: "bg-status-warning", description: "Warna background status peringatan." },
                { name: "Error", variable: "--status-error-bg", tailwind: "bg-status-error", description: "Warna background status kesalahan." },
                { name: "Success Shade", variable: "--status-success-shade", tailwind: "bg-status-success-shade", description: "Warna background lembut sukses." },
                { name: "Error Shade", variable: "--status-error-shade", tailwind: "bg-status-error-shade", description: "Warna background lembut kesalahan." }
            ]
        }
    ];

    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(text);
        toast.success("Variable Copied!", {
            description: `${text} telah disalin ke clipboard.`,
            duration: 2000
        });
    }
</script>

<svelte:head>
    <title>Colors System | Blue School Theme</title>
</svelte:head>

<div class="min-h-screen bg-neutral-50 p-6 md:p-12 font-sans space-y-16">
    <div class="mx-auto space-y-16">
        
        <!-- Header -->
        <div class="relative">
            <div class="absolute -top-12 -left-12 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div class="flex items-center gap-3 mb-2 text-blue-600">
                <Palette class="w-6 h-6" />
                <span class="font-bold tracking-widest uppercase text-xs">Theme Configuration</span>
            </div>
            <h1 class="text-5xl font-black text-neutral-900 mb-6 tracking-tight italic uppercase">Blue School Theme</h1>
            <p class="text-xl text-neutral-500 max-w-3xl leading-relaxed font-medium">
                Pusat kontrol warna aplikasi. Tema saat ini adalah <span class="text-blue-600 font-bold underline decoration-blue-200 underline-offset-4">Blue School</span>. 
                Semua warna di bawah ini menggunakan CSS Variables yang terstandarisasi.
            </p>
            
            <!-- Theme Switching Info -->
            <div class="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-3xl flex items-start gap-4">
                <div class="p-2 bg-amber-200 rounded-xl text-amber-700">
                    <ShieldAlert class="w-5 h-5" />
                </div>
                <div>
                    <h4 class="font-bold text-amber-900 uppercase italic text-sm mb-1">Cara Mengubah Tema</h4>
                    <p class="text-sm text-amber-800 leading-relaxed italic">
                        Buka file <code class="bg-amber-100 px-1.5 py-0.5 rounded font-bold">src/routes/colors.css</code>. 
                        Uncomment blok <span class="font-bold">Beige School</span> dan Comment blok <span class="font-bold">Blue School</span> untuk mengganti seluruh tampilan aplikasi secara instan.
                    </p>
                </div>
            </div>
        </div>

        <!-- Color Sections -->
        {#each colorGroups as group (group.category)}
            <div class="space-y-8 group">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-200 pb-8">
                    <div class="space-y-2">
                        <div class="flex items-center gap-3">
                            <svelte:component this={group.icon} class="w-6 h-6 text-neutral-400" />
                            <h2 class="text-3xl font-black text-neutral-900 italic uppercase tracking-tighter">{group.category}</h2>
                        </div>
                        <p class="text-neutral-500 font-medium max-w-2xl italic">{group.description}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {#each group.shades as shade (shade.name)}
                        <button 
                            class="group/card relative text-left bg-white rounded-[32px] p-6 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-neutral-100"
                            onclick={() => copyToClipboard(shade.variable)}
                        >
                            <!-- Color Swatch -->
                            <div class="relative w-full h-32 rounded-2xl mb-6 overflow-hidden shadow-inner flex items-center justify-center">
                                <div class="absolute inset-0 {shade.tailwind} transition-colors duration-500"></div>
                                <div class="opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/10 backdrop-blur-sm inset-0 absolute flex items-center justify-center">
                                    <Copy class="w-8 h-8 text-white drop-shadow-lg" />
                                </div>
                            </div>

                            <!-- Info -->
                            <div class="space-y-3">
                                <h3 class="font-black text-lg text-neutral-900 uppercase italic leading-none">{shade.name}</h3>
                                <div class="flex items-center gap-2">
                                    <code class="bg-neutral-100 px-3 py-1 rounded-lg text-[11px] font-bold text-neutral-600 tracking-wider transition-all group-hover/card:bg-blue-50 group-hover/card:text-blue-600">{shade.variable}</code>
                                </div>
                                <p class="text-[13px] text-neutral-500 font-medium leading-relaxed italic">{shade.description}</p>
                            </div>

                            <!-- Corner Badge -->
                            <div class="absolute top-4 right-4 translate-x-2 -translate-y-2 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-0 group-hover/card:translate-y-0 transition-all duration-300">
                                <Badge variantColor="primary" badgeSize="small">Copy Variable</Badge>
                            </div>
                        </button>
                    {/each}
                </div>
            </div>
        {/each}

        <!-- Accessibility Note -->
        <div class="bg-neutral-900 rounded-[40px] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl">
            <div class="absolute top-0 right-0 p-12 opacity-10 rotate-12">
                <Globe class="w-64 h-64" />
            </div>
            
            <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-8">
                    <div class="flex items-center gap-4">
                        <div class="p-3 bg-blue-600 rounded-2xl shadow-xl shadow-blue-500/20">
                            <ShieldAlert class="w-8 h-8" />
                        </div>
                        <h3 class="text-3xl font-black italic uppercase tracking-widest">Accessibility Rules</h3>
                    </div>
                    <p class="text-neutral-400 font-medium text-lg leading-relaxed italic">
                        Pastikan rasio kontras teks memenuhi standar <span class="text-white font-bold underline decoration-blue-500 underline-offset-4">WCAG 2.1 AA</span>. Gunakan warna netral gelap untuk teks di atas background terang, dan pastikan elemen interaktif memiliki status visual yang jelas.
                    </p>
                    <div class="flex flex-wrap gap-4 pt-4">
                        <div class="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                            <div class="w-4 h-4 rounded-full bg-green-500"></div>
                            <span class="text-xs font-black uppercase tracking-widest italic">Contrast Check: Pass</span>
                        </div>
                        <div class="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3">
                            <div class="w-4 h-4 rounded-full bg-blue-500"></div>
                            <span class="text-xs font-black uppercase tracking-widest italic">Color Blind Safe</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] space-y-6">
                    <div class="flex items-center gap-3 mb-2">
                        <Info class="w-5 h-5 text-blue-400" />
                        <span class="text-xs font-black uppercase tracking-widest text-blue-400">Pro Tips</span>
                    </div>
                    <ul class="space-y-5">
                        <li class="flex items-start gap-4">
                            <div class="w-6 h-6 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5 italic font-black">1</div>
                            <p class="text-sm font-medium text-neutral-300 italic uppercase tracking-tight">Gunakan variabel CSS alih-alih hardcoded HEX codes untuk konsistensi tema.</p>
                        </li>
                        <li class="flex items-start gap-4">
                            <div class="w-6 h-6 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5 italic font-black">2</div>
                            <p class="text-sm font-medium text-neutral-300 italic uppercase tracking-tight">Warna Neutral 20 adalah standar background container kami.</p>
                        </li>
                        <li class="flex items-start gap-4">
                            <div class="w-6 h-6 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 shrink-0 mt-0.5 italic font-black">3</div>
                            <p class="text-sm font-medium text-neutral-300 italic uppercase tracking-tight">Warna BG Shade adalah dasar kanvas aplikasi untuk kesan modern.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</div>

<style>
    :global(body) {
        background-color: #FAFAFA;
    }
</style>
