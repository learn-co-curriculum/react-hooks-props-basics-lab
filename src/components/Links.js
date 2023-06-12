function Links({links}) {
  console.log(links)

  const displayLinks = []
  for (let key in links) {
    displayLinks.push(<a href={links[key]} key={links[key]}>{links[key]}</a>)
  }

  return (
    <>
        <div>Links</div>
        {displayLinks}
    </>
  )
}

export default Links