import Image from "next/image"

export default function PostAuthor({authorAvatar, authorName, authorJob}:any) {
    return (
        <div className="flex items-center mt-5">
            <Image src={authorAvatar} width={56} height={56} className="rounded-full object-cover" />
            <div className="ml-4">
                <h3>{authorName}</h3>
                <div className="text-white/60 text-sm mt-1">
                    {authorJob}
                </div>
            </div>
        </div>
    )
}
