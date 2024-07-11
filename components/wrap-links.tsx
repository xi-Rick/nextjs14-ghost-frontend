import { LinkPreview } from "@/components/ui/link-preview";
import parse, { domToReact, Element, HTMLReactParserOptions, Text } from 'html-react-parser';

export function wrapLinksWithLinkPreview(html: string) {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === 'a' && domNode.attribs && domNode.attribs.href) {
        return (
          <LinkPreview url={domNode.attribs.href} className="font-bold">
            {domToReact(domNode.children as (Element | Text)[], options)}
          </LinkPreview>
        );
      }
    }
  };

  return parse(html, options);
} 8