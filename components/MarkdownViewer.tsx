import { marked } from "marked";
import React from "react";
import sanitizeHtml from "sanitize-html";

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
  "img",
  "h1",
  "h2",
  "h3",
]);

const allowedAttributes = Object.assign(
  {},
  sanitizeHtml.defaults.allowedAttributes,
  {
    img: ["alt", "src"],
  }
);

interface IMarkdownViewerProps {
  text: string;
  height?: string | number;
  hasMarkdown?: boolean;
}

const MarkdownViewer = ({
  text,
  height,
  hasMarkdown,
}: IMarkdownViewerProps) => {
  return (
    <div
      className={`markdown-viewer ${hasMarkdown ? "show" : ""}`}
      style={{ height }}
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(marked(text), {
          allowedTags,
          allowedAttributes,
        }),
      }}
    />
  );
};

export default MarkdownViewer;
