import React from 'react'
import NotFoundPage from '@/components/reusable/NotFoundPage';
import { getProjectById } from '@/lib/database/actions/project.actions';
import ProjectDetailPage from '@/components/reusable/ProjectDetailPage';
import { PageProps } from '@/.next/types/app/layout';

const Page = async ({ params }: PageProps) => {
    try {
        const { id } = await params
        const project = await getProjectById(id);

        if (!project) {
        throw new Error('project not found')
        }

        return (
        <div className="p-3">
            <ProjectDetailPage project={project}/>
        </div>
        )
    } catch (error) {
        console.error('Error fetching item:', error)
        return <NotFoundPage />;
    }
}

export default Page