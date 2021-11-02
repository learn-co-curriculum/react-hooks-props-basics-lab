import Link from "./Link"

function Links(props) {

    let renderLinks = () => {
        let linksUrls = Object.values(props.links)
        
        return linksUrls.map(linkUrl => {
            return (<Link url={linkUrl} />)
        })
    }

    return (
        <div>
            <h3>Links</h3>
            {renderLinks()}
        </div>
    )
}

export default Links;