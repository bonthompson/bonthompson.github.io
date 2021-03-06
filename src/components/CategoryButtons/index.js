import { CategoryButtonsContainer, CategoryButton } from './styles/index'
import { useRequestsContext } from '../../hooks/index'
import { GlassesCategoryIcon, FeetCategoryIcon, BeardsCategoryIcon, MiscCategoryIcon, BackgroundCategoryIcon, BodyCategoryIcon, BottomsCategoryIcon, EyebrowsCategoryIcon, EyesCategoryIcon, HairCategoryIcon, MouthCategoryIcon, TopsCategoryIcon, JewelleryIcon } from '../../assets/categoryButtonSvgs/index'

// Are we going to have a nose category?
// need shoes

const CategoryButtons = () => {
    const { setIsDisplayedItem } = useRequestsContext()
    return (

        <CategoryButtonsContainer>
            <CategoryButton onClick={() => setIsDisplayedItem({ category: 'BODY' })} >
                <BodyCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({ category: 'EYES' })}>
                <EyesCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({ category: 'EYEBROWS' })}>
                <EyebrowsCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({ category: 'HAIR' })}>
                <HairCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({ category: 'MOUTH' })} >
                <MouthCategoryIcon />
            </CategoryButton>
            {/* <CategoryButton onClick={() => setIsDisplayedItem({ category: 'NOSE' })} >
                nose
            </CategoryButton> */}
            <CategoryButton onClick={() => setIsDisplayedItem({ category: 'GLASSES' })} >
                <GlassesCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({ category: 'JEWELLERY' })} >
                <JewelleryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({ category: 'BEARD' })} >
                <BeardsCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({ category: 'TOPS' })} >
                <TopsCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({ category: 'BOTTOMS' })} >
                <BottomsCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({ category: 'SHOES' })} >
                <FeetCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({ category: 'MISC' })} >
                <MiscCategoryIcon />
            </CategoryButton>
            <CategoryButton onClick={() => setIsDisplayedItem({ category: 'BACKGROUND' })} >
                <BackgroundCategoryIcon />
            </CategoryButton>
        </CategoryButtonsContainer >
    );
}

export default CategoryButtons;