const images = import.meta.glob('@/assets/miniaturas/*.png',{eager:true});

const imagePaths = Object.values(images).map((module) => module.default);

export default imagePaths