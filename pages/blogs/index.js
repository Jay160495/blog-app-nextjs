export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const blogs = await res.json();

    return {
        props: {
            blogs,
        },
    };
}

export default function Blogs({ blogs }) {
    return (
        <div>
            <h1>Blog List</h1>
            <ul>
                {blogs.slice(0, 5).map(blog => (
                    <li key={blog.id}>
                        <Link href={`/blogs/${blog.id}`}>
                            <a>{blog.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
