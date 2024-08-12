import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Index = (props) => (
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <div className="container center">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="title"
      >
        <h1>Blog Posts</h1>
      </motion.div>
      <motion.div variants={stagger} className="post-row">
        {props.posts.map(({ node: post }) => (
          <Link key={post.title} href="#">
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card"
            >
              {post.coverImage && (
                <motion.img
                  initial={{ x: 60, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  src={post.coverImage.node.sourceUrl}
                  width={250}
                  alt={post.title}
                />
              )}
              <div className="post-info">
                <h4>{post.title}</h4>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  </motion.div>
);

Index.getInitialProps = async function () {
  const res = await fetch("https://blog.ultraehp.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          posts {
            edges {
              node {
                title
                coverImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      `,
    }),
  });
  const json = await res.json();

  // Extract posts data
  const posts = json.data.posts.edges;

  return {
    posts,
  };
};

export default Index;
