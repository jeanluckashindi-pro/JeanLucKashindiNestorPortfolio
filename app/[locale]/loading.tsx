export default function Loading() {
    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
            {/* SKELETON HEADER */}
            <div className="fixed top-0 left-0 w-full z-[100] bg-[#020202]/90 border-b border-white/5 h-20 flex items-center">
                <div className="max-w-[1920px] mx-auto px-6 lg:px-8 w-full flex items-center justify-between">
                    {/* Logo Skeleton */}
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-neutral-800 rounded-lg animate-pulse"></div>
                        <div className="flex flex-col gap-1">
                            <div className="w-20 h-4 bg-neutral-800 rounded animate-pulse"></div>
                            <div className="w-10 h-2 bg-neutral-900 rounded animate-pulse"></div>
                        </div>
                    </div>

                    {/* Nav Skeleton */}
                    <div className="hidden lg:flex items-center gap-8">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-16 h-3 bg-neutral-900 rounded-full animate-pulse"></div>
                        ))}
                    </div>

                    {/* CTA Skeleton */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full bg-neutral-800 animate-pulse"></div>
                        <div className="w-32 h-8 bg-neutral-800 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* SPACER */}
            <div className="h-28"></div>

            {/* SKELETON HERO */}
            <div className="max-w-[1920px] mx-auto px-6 lg:px-8 pt-20">
                <div className="max-w-4xl space-y-8">
                    {/* Badge */}
                    <div className="w-48 h-6 bg-neutral-900 rounded-full animate-pulse"></div>

                    {/* Title */}
                    <div className="space-y-4">
                        <div className="w-full max-w-2xl h-16 bg-neutral-800 rounded-2xl animate-pulse"></div>
                        <div className="w-3/4 h-16 bg-neutral-800 rounded-2xl animate-pulse"></div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3 pt-4">
                        <div className="w-full max-w-xl h-4 bg-neutral-900 rounded animate-pulse"></div>
                        <div className="w-11/12 max-w-xl h-4 bg-neutral-900 rounded animate-pulse"></div>
                        <div className="w-10/12 max-w-xl h-4 bg-neutral-900 rounded animate-pulse"></div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-4 pt-8">
                        <div className="w-40 h-12 bg-neutral-800 rounded-full animate-pulse"></div>
                        <div className="w-40 h-12 bg-neutral-900 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
