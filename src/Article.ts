/**
 * Print `Article` struct to string
 *
 * @desczh
 * 格式化`Article`结构到文本
 *
 * 这是一个工具包,使用户快速的实现`Article`结构的打印。
 * @file
 */

import { pipe } from 'fp-ts/lib/pipeable';
import { DocApp } from './Document';
import { monoidString, fold } from 'fp-ts/lib/Monoid';
import { isArray } from 'macoolka-predicate';
const foldString = fold(monoidString);
/**
 *
 */
export interface Article {
    /**
     * A article title
     */
    title?: string;
    /**
     * Description for the article
     */
    description?: string[] | string;
    /**
     * Section for the article
     */
    section?: ArticleSection[] | ArticleSection;
}
export interface ArticleSection {
    title?: string;
    content?: string[] | string;
}
function printSectionTitle(text: string): DocApp {
    return C => pipe(
        text,
        C.doc.bold,
        C.doc.section

    );
}
function printSection(text: string): DocApp {
    return C => pipe(
        text,
        C.doc.section
    );
}
function printArticleTitle(text: string): DocApp {
    return C => pipe(
        text,
        C.doc.h1,
        C.doc.section
    );
}
const toArray = <A>(a?: A | A[]) => {
    return a
        ? isArray(a)
            ? a
            : [a]
        : [];
};
function printArticleSection({ title, content: lines }: ArticleSection): DocApp {

    return C => {
        const titleText = title ? printSectionTitle(title)(C) : '';
        const sectionText = pipe(
            toArray(lines).map(a => printSection(a)(C)),
            foldString
        );
        return pipe(
            [
                titleText,
                sectionText,
            ],
            foldString
        );
    };
}
/**
 * The print a `Article` to  document `app`
 * @desczh
 * 转换`Article`到`Dccument App`
 * @since 0.2.0
 */
export function printArticle({ title, section, description }: Article): DocApp {
    return C => {
        const titleText = title ? printArticleTitle(title)(C) : '';
        const sectionText = pipe(
            toArray(section).map(a => printArticleSection(a)(C)),
            foldString
        );
        const descriptionText = pipe(
            toArray(description).map(a => printSection(a)(C)),
            foldString
        );
        return pipe(
            [
                titleText,
                descriptionText,
                sectionText,
            ],
            foldString
        );
    };
}
