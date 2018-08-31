export function formatNewsList (news) {
    const { newsid, title, postdate, commentcount, lapinid, image } = news
    return {
      id: newsid,
      title,
      postdate: formatTime(postdate),
      commentcount,
      lapinid,
      image,
      link: `/pages/news/detail?id=${newsid}&title=${title}`
    }
  }
  