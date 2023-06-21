import Image from 'next/image'
// import { usePathname } from 'next/navigation';
import path from 'path';
import fs from 'fs';

import projectData from '../../projects.json' assert {type: 'json'};
import Link from 'next/link';

interface ProjectPageProps {
    params: {
        projectName: string;
    };
}

interface ProjectData {
    [key: string]: {
      id: string;
      imagePath: string;
    };
  }

function readFile(filePath : string): string {
    try {
        const text = fs.readFileSync(filePath, 'utf-8');
        return text;
    } catch (error) {
        console.error(`${error}`);
        return '';
    }
}

export async function generateStaticParams() {
    return [{projectName:'eceRISC'}, {projectName:'geo'},
{projectName:'clustering'}, {projectName:'employee'}, {projectName:'cs671'},
{projectName:'swervePong'}, {projectName:'eog'}, {projectName:'housing'}];
}



export default function ProjectPage({params}: ProjectPageProps) {
    // const path1 = usePathname();
    // const lI = path1.lastIndexOf('/');
    // const projectName = path1.substring(lI + 1);

    // console.log(project);
    // console.log(project);

    // const p1 = projectData.find((project) => project.id === 'eceRISC');

    // console.log(p1);

    // console.log(params.projectName);
    // const projectInfo = projectData[params.projectName];
    const projects: ProjectData = projectData;
    const path = projects[params.projectName].imagePath;

    return (
        <div>
            Page
            <p>Test paragraph</p>
            {/* <div>This is a page {projectName}</div> */}
            <p>{readFile('public/projectDescriptions/' + params.projectName + '.txt')}</p>
            <Image src={path} alt="picture" width={500} height={500}></Image>
            <Link href="https://evanglas.com/pong.html">Pong</Link>
        </div>
    )
}

// export async function getStaticPaths() {
//     const paths = projectData.map((project) => ({
//         params: {projectName: project.id}
//     }))

//     console.log("Pa:");
//     console.log(paths);
//     return {
//         paths,
//         fallback: true,
//     };
//   }
  
// export async function getStaticProps({params}) {
//     // console.log("These are the params:");
//     // console.log(params);
//     // Fetch necessary data for the blog post using params.id
//     const { projectName } = params;
//     const project = await projectData.find((project) => project.id === 'eceRISC');

//     // console.log(params);
//     return {
//         props: {
//             project,
//             "hi":"hey"
//         },
//     };
//   }