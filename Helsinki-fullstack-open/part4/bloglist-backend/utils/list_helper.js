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

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}

