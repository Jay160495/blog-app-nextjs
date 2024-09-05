export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const blog = await res.json();

    return {
        props: {
            blog,
        },
    };
}

export default function BlogPost({ blog }) {
    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
        </div>
    );
}
