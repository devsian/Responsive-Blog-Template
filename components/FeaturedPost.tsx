import Link from "next/link"

// Component
import InfoPost from "@components/InfoPost"

// Image
import Image from "next/image"
import ImageAuthorBanner from "../public/author-1.png"

export default function FeaturedPost() {
    return (
        <article>
            <div className="flex -mx-4 lg:items-center items-start flex-wrap">
                <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
                    <Link href="/detail">
                        <img src="/featured-thumbnail.png" className="rounded-xl w-full object-cover mb-4 md:mb-0 cursor-pointer"/>
                    </Link>
                </div>
                <div className="lg:w-4/12 md:w-5/12 px-4">
                    <InfoPost 
                        category="UI Design"
                        date="Monday, 10 Jan 2022"
                        title="Are you a good or a better designer? Check yourself now!"
                        shortDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum voluptate consequatur labore in sed atque libero debitis optio ea?"
                        authorAvatar={ImageAuthorBanner}
                        authorName="Yayan Iyan"
                        authorJob="Vice Precident of Design Grab"
                    />
                </div>
            </div>
            <hr className="border-white/10 mt-10 md:hidden"/>
        </article>
    )
}
