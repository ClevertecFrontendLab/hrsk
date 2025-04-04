import { ComponentWithAs, Icon, IconProps } from '@chakra-ui/react';

type SpriteIconProps = IconProps & {
    spriteId: string;
    spritePath?: string;
    boxSize: string;
    viewBox?: string;
};

export const SpriteIcon: ComponentWithAs<'svg', SpriteIconProps> = (props: SpriteIconProps) => {
    const { spriteId, spritePath = '/sprite.svg', boxSize, viewBox, ...otherProps } = props;

    return (
        <Icon viewBox={viewBox} {...otherProps} boxSize={boxSize}>
            <use xlinkHref={`${spritePath}#${spriteId}`} />
        </Icon>
    );
};
