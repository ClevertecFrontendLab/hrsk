import { CardBody, CardHeader } from '@chakra-ui/icons';
import { Avatar, Box, Card, Text } from '@chakra-ui/react';

type BlogCardProps = {
    avatarSrc?: string;
    name?: string;
    userName?: string;
    postText: string;
};
export const BlogCard = (props: BlogCardProps) => {
    const { avatarSrc, name, userName, postText } = props;

    return (
        <Card
            maxW='100%'
            maxWidth='426px'
            height='100%'
            borderRadius='8px'
            border='1px'
            borderColor='blackAlpha.200'
            overflow='hidden'
            display='flex'
            flexDirection='column'
        >
            <CardHeader
                position='relative'
                maxWidth='346px'
                display='flex'
                flexDirection='row'
                alignItems='center'
                padding='16px 24px 16px 24px'
            >
                <Avatar src={avatarSrc} boxSize='48px' />
                <Box paddingLeft='12px' paddingRight='24px'>
                    <Text fontSize='md' color='black.000'>
                        {name}
                    </Text>
                    <Text fontSize='sm' color='gray.500'>
                        {userName}
                    </Text>
                </Box>
            </CardHeader>
            <CardBody padding='12px 24px 20px 24px'>
                <Text fontWeight={400} fontSize='14px' textAlign='justify' noOfLines={3}>
                    {postText}
                </Text>
            </CardBody>
        </Card>
    );
};
