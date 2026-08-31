const dummy = (blogs) => {
  return 1
}

module.exports = {
  dummy
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  return blogs.reduce((favorite, blog) =>
    blog.likes > favorite.likes ? blog : favorite
  )
}

const mostBlogs = (blogs) => {
  const authorCounts = blogs.reduce((counts, blog) => {
    counts[blog.author] = (counts[blog.author] || 0) + 1
    return counts
  }, {})

  return Object.entries(authorCounts).reduce(
    (most, [author, blogs]) =>
      blogs > most.blogs ? { author, blogs } : most,
    { author: '', blogs: 0 }
  )
}

const mostLikes = (blogs) => {
  const authorLikes = blogs.reduce((likes, blog) => {
    likes[blog.author] = (likes[blog.author] || 0) + blog.likes
    return likes
  }, {})

  return Object.entries(authorLikes).reduce(
    (most, [author, likes]) =>
      likes > most.likes ? { author, likes } : most,
    { author: '', likes: 0 }
  )
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}

