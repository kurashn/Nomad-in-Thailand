"use client";

export default function YouTubeEmbed({ videoId = "Videos" }: { videoId?: string }) {
    // If no specific ID, we can link to the channel or show a playlist.
    // Ideally, this should be dynamic. For now, we'll embed the channel or a specific popular video.
    // The user channel is @T78community.
    // Since I don't have a specific video ID, I will structure this as a "Latest Videos" section
    // that links to the channel, but embeds one featured video if I had one.
    // For the purpose of the request "Embed latest video", I'll use a placeholder structure 
    // that looks like an embed but might be a link if I can't get an ID, 
    // OR I will pick a recent video from their channel if I could browse.
    // Since I can't browse live YouTube easily to get an ID, I will create a 
    // "Featured Video" layout where they can paste the ID.
    // I'll use a placeholder ID or just a static image link for now, 
    // but better yet, I'll use a generic "Welcome" video style or asked user.
    // Actually, I'll assume they want the channel link prominent if no video.
    // Re-reading: "Embed latest video... encourage subscribe".
    // I will make a component that takes an ID, and defaults to a nice "Visit Channel" card if missing.
    // Wait, I should try to make it look like a player.

    // Let's use a placeholder video ID for "Nomad life in Thailand" type content or similar just for demo,
    // Or better, just a placeholder block that says "Latest Video (Update ID)".

    return (
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-black relative group">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
            ></iframe>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none" />
        </div>
    );
}
