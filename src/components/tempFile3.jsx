// ...existing code...
<Row className="mt-4">
  {cardData.map((card, idx) => (
    <Col md={6} key={card.title} className="mb-4">
      <Card className="h-100 text-center">
        <motion.div
          className="flip-card"
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="flip-card-inner"
            style={{ width: "100%", height: "340px" }}
          >
            <div className="flip-card-front">
              <img
                src={card.img}
                alt={card.title}
                className="card-img-top"
                style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "0.375rem" }}
              />
            </div>
            <div className="flip-card-back">
              <img
                src={card.backImg}
                alt={card.title + " details"}
                className="card-img-top"
                style={{ width: "100%", height: "240px", objectFit: "cover", borderRadius: "0.375rem" }}
              />
              <Button
                variant="primary"
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3"
              >
                Visit Project
              </Button>
            </div>
          </motion.div>
        </motion.div>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.desc}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
// ...existing code...