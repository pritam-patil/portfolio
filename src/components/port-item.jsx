import React from 'react'
import { Slide, Text  } from '../elements';

export default props => {
    const { href, subtitle, title, imgSrc} = props;
  
    return (
      <div className="columns portfolio-item">
            <div className="item-wrap">
                <Text as='a' href={href} title>
                    <Slide                  
                        alt={title}
                        src={imgSrc}
                    />
                    <div className="overlay">
                        <div className="portfolio-item-meta">
                            <Text as='h5'>{ title }</Text>
                            <Text as='p'>{ subtitle }</Text>
                        </div>
                    </div>
                    <div className="link-icon">
                        <i className="icon-plus" />
                    </div>
                </Text>
            </div>
        </div>
  )
}
