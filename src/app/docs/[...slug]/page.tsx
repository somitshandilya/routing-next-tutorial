export default function Docs({ params }: { params: { slug: string[] } }) {
    return (
        <div>
            <h1>Docs {params.slug.join("/")}</h1>
        </div>
    );
}