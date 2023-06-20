'use client'

import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
    id: string;
    imgPath: string;
}

export default function ProjectCard(props : ProjectCardProps) {
    return (
        <div id="outer_wrapper" className="w-52 h-52 border">
            <Link href={`/projects/${encodeURIComponent(props.id)}`}>
                <div className='relative w-52 h-52'>
                    <Image src={props.imgPath} alt="Picture" fill={true} style={{objectFit:"cover"}} className='h-full'/>
                </div>
            </Link>
        </div>
    )
}