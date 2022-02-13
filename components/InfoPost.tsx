import Image from "next/image"
import ImageAuthorBanner from "../public/author-1.png"
import PostAuthor from "./PostAuthor"
import PostMetaTitle from "./PostMetaTitle"

export default function InfoPost({ 
    category, 
    date, 
    title,
    shortDescription, 
    authorAvatar, 
    authorName, 
    authorJob
}:any) {
    return (
        <>      
            <PostMetaTitle 
                category={category}
                title={title}
                date={date}
            />
            <p className="text-white/70 mt-5 w-10/12">
                {shortDescription}
            </p>

            <PostAuthor 
                authorAvatar={authorAvatar}
                authorJob={authorJob}
                authorName={authorName}
            />
        </>
    )
}
