import { Prisma } from "@prisma/client";

export default async function handler(req, res) {
    const {name, email, feedbackType, message} = req.body;
    try {
        await prisma.feedback.create({
            data: {
                name,
                email,
                feedbackType,
                message
            }
        })
        res.status(200).json({message: 'submitted successfully'})
    } catch (error) {
        res.status(400).json({error});
    }
}