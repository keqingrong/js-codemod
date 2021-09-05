import type { Comment, Node, Transform } from 'jscodeshift';

const isCommentBlock = (node: Node) => node.type === 'CommentBlock';
const hasAuthorTag = (node: Comment) => /@author/i.test(node.value);
const transformer: Transform = (fileInfo, api, options) => {
  const printOptions = options.printOptions || {
    lineTerminator: '\n',
    quote: 'single',
  };
  const j = api.jscodeshift;
  const root = j(fileInfo.source);
  const firstNode: Node = root.find(j.Program).get('body', 0).node;
  if (
    firstNode &&
    Array.isArray(firstNode.comments) &&
    firstNode.comments.length > 0
  ) {
    const firstComment = firstNode.comments[0];
    if (isCommentBlock(firstComment) && hasAuthorTag(firstComment)) {
      firstNode.comments.splice(0, 1);
    }
  }

  return root.toSource(printOptions);
};

export default transformer;
