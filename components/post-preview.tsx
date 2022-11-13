import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import moment from "moment";

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }) {
	const { node } = coverImage;

	return (
		// <div>
		// 	<div className="mb-5">{coverImage && <CoverImage title={title} coverImage={coverImage} slug={slug} />}</div>
		// 	<h3 className="text-3xl mb-3 leading-snug">
		// <Link href={`/posts/${slug}`}>
		// 	<a className="hover:underline" dangerouslySetInnerHTML={{ __html: title }}></a>
		// </Link>
		// 	</h3>
		// 	<div className="text-lg mb-4">
		// 		<Date dateString={date} />
		// 	</div>
		// 	<div className="text-lg leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: excerpt }} />
		// 	<Avatar author={author} />
		// </div>
		<Link href={`/posts/${slug}`}>
			<a>
				<Card css={{ w: "100%", h: "400px" }}>
					<Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
						<Col>
							<Text size={14} weight="bold" transform="uppercase" color="#ffffffAA">
								New
							</Text>
							<Text size={25} color="white" dangerouslySetInnerHTML={{ __html: title }}></Text>
						</Col>
					</Card.Header>
					<Card.Body css={{ p: 0 }}>
						<Card.Image src={node.sourceUrl} width="100%" height="100%" objectFit="cover" alt={title} />
					</Card.Body>
					<Card.Footer
						isBlurred
						css={{
							position: "absolute",
							bgBlur: "#ffffff66",
							borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
							bottom: 0,
							zIndex: 1,
						}}
					>
						<Row>
							<Col>
								<Text color="#000" size={12}>
									{moment(date).format("DD MMMM YYYY")}
								</Text>
							</Col>
							<Col>
								<Row justify="flex-end">
									<Button flat auto rounded color="secondary">
										<Text css={{ color: "inherit" }} size={12} weight="bold" transform="uppercase"></Text>
									</Button>
								</Row>
							</Col>
						</Row>
					</Card.Footer>
				</Card>
			</a>
		</Link>
	);
}
