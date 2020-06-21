export const parseImage = description => {
  const positionOfStart = description.indexOf("<img");
  const positionOfEnd = description.indexOf(">", positionOfStart);
  const imageHtmlResult = description.slice(positionOfStart, positionOfEnd + 1);
  const srcStartPos = imageHtmlResult.indexOf('src="') + 5;
  const srcEndPos = imageHtmlResult.indexOf('"', srcStartPos);
  const urlToImage = imageHtmlResult.slice(srcStartPos, srcEndPos);
  const restOfDescription = description.replace(imageHtmlResult, "");

  return {
    urlToImage,
    restOfDescription
  };
};
