import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import {
  TelegramShareButton,
  TelegramIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share'

function AlumniShare() {
  return (
    <Container fluid >
      
          <Row>
<Col className="d-flex justify-content-end">              
<div class="card wbg-main border-0 alumni-box">
<div className="alu-share">
<Image src="/images/light.svg" class="card-img-top" alt="..." width={70} height={70} />
</div>
              <div class="card-body">
<Link href="/alumni-details" class="btn alu-btn">Join the Alumni Network</Link>
</div>
              
</div>
</Col>
<Col>
<div class="card wbg-main border-0 alumni-box">
<div className="alu-share">
              <Image src="/images/users.svg" class="card-img-top" alt="..." width={70} height={70} />
</div>            
  <div class="card-body">
              <a href="#" class="btn alu-btn">Invite your friends
              <div className="social-hide">
<Row className="mt-4">
<Col>
<FacebookShareButton
  url={'https://walmartvriddhi.org/alumni-profiles'}
  quote={'Join the alumni network'}
  hashtag={'#walmartvriddhialumni'}
>
  <FacebookIcon size={32} round />
</FacebookShareButton>
                    </Col>
<Col>
<TelegramShareButton
  url={'https://walmartvriddhi.org/alumni-profiles'}
  title={'Join the alumni network'}
>
  <TelegramIcon size={32} round />
</TelegramShareButton>
</Col>
<Col>
<WhatsappShareButton
  url={'https://walmartvriddhi.org/alumni-profiles'}
  title={'Join the alumni network'}
  separator=":: "
>
  <WhatsappIcon size={32} round />
</WhatsappShareButton>
                    </Col>
                  </Row>   
              </div>
              </a>
  </div>
</div>
              
              </Col>

          </Row>

    
      </Container>
  )
}

export default AlumniShare
