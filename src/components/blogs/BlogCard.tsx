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
            width={{ sm: '304px', md: '226px', lg: '266px', xl: '426px' }}
            height='100%'
            borderRadius='8px'
            border='1px'
            borderColor='blackAlpha.200'
            overflow='hidden'
            display='flex'
            flexDirection='column'
            padding={{ md: 0 }}
        >
            <CardHeader
                position='relative'
                maxWidth='100%'
                display='flex'
                flexDirection='row'
                alignItems='center'
                padding={{ sm: '16px 16px 8px 16px', xl: '16px 24px 16px 24px' }}
            >
                <Avatar src={avatarSrc} boxSize={{ sm: '32px', md: '48px' }} />
                <Box paddingLeft='12px'>
                    <Text
                        fontSize={{ md: '16px', lg: '18px' }}
                        color='black.000'
                        maxHeight='100%'
                        noOfLines={{ sm: 1, md: 1, lg: 1, xl: 1 }}
                    >
                        {name}
                    </Text>
                    <Text fontSize={{ sm: '12px' }} color='gray.500'>
                        {userName}
                    </Text>
                </Box>
            </CardHeader>
            <CardBody padding={{ sm: '8px 16px 16px 16px', xl: '12px 24px 20px 24px' }}>
                <Text fontWeight={400} fontSize={{ sm: '14px' }} textAlign='left' noOfLines={3}>
                    {postText}
                </Text>
            </CardBody>
        </Card>
    );
};
