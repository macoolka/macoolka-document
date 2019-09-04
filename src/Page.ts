/**
 * Print `Page` struct to string
 *
 * @desczh
 * 格式化`Page`结构到文本
 *
 * 这是一个工具包,使用户快速的实现`Page`结构的打印。
 * @file
 */

import { pipe } from 'fp-ts/lib/pipeable';
import { DocApp } from './Document';
import { monoidString, fold } from 'fp-ts/lib/Monoid';
import * as A from 'fp-ts/lib/Array';
import * as O from 'fp-ts/lib/Option';
const foldString = fold(monoidString);
/**
 * NavItem on a Site
 * @desczh
 * 站点导航
 * @since 0.2.0
 */
export interface NavItem {
    /**
     * Order for the NavItem
     * @desczh
     * 在导航中的级别
     */
    order: number;
    /**
     * Exclude in nav
     * @desczh
     * 排除在导航中
     */
    exclude?: boolean;
    /**
     * this is a parent page
     * @desczh
     * 是否有子导航
     */
    hasChildren?: boolean;
    /**
     * set this to the site path that contains the child pages
     * @desczh
     * 包含子页面的路径
     */
    permaLink?: string;
    /**
     * set parent page name
     * @desczh
     * 父导航的名称
     */
    parent?: string;
    /**
     * auto TABLE OF CONTENTS
     * @desczh
     * 自动产生子页面的TOC
     */
    toc?: boolean;
}
/**
 * Search Item in Site
 * @desczh
 * 站点搜索
 * @since 0.2.0
 */
export interface SearchItem {
    /**
     * exclude the search
     * @desczh
     * 排除在搜索引擎外
     */
    exclude?: boolean;

}
/**
 * Page in Site
 * @desczh
 * 站点页面
 * @since 0.2.0
 */
export interface Page {
    /**
     * nav info
     * @desczh
     * 导航信息
     */
    nav: NavItem;
    /**
     * Layout for the page
     * @desczh
     * 页面布局
     */
    layout?: string;
    /**
     * Name for the page
     * @desczh
     * 页面名称
     */
    name: string;
    /**
     * search info
     * @desczh
     * 页面全局搜索信息
     */
    search?: SearchItem;

}
/**
 * print `Jekyll` Page
 * @desczh
 * 输出`Jekyll`页面
 *
 */
export function printJekyllPage(page: Page): DocApp {
    return C => pipe(
        [
            O.some(C.doc.br(`---`)),
            O.some(C.doc.br(`title: ${page.name}`)),
            O.some(C.doc.br(`nav_order: ${page.nav.order}`)),
            pipe(
                O.fromNullable(page.layout),
                O.map(value => C.doc.br(`layout: ${value}`))
            ),
            pipe(
                O.fromNullable(page.nav.hasChildren),
                O.map(value => C.doc.br(`has_children: ${value}`))
            ),
            pipe(
                O.fromNullable(page.nav.permaLink),
                O.map(value => C.doc.br(`permalink: ${value}`))
            ),
            pipe(
                O.fromNullable(page.nav.parent),
                O.map(value => C.doc.br(`parent: ${value}`))
            ),
            pipe(
                O.fromNullable(page.nav.exclude),
                O.map(value => C.doc.br(`nav_exclude: ${value}`))
            ),
            pipe(
                O.fromNullable(page.nav.toc),
                O.map(value => C.doc.br(`has_toc: ${value}`))
            ),
            pipe(
                O.fromNullable(page.search),
                O.chain(a => O.fromNullable(a.exclude)),
                O.map(value => C.doc.br(`search_exclude: ${value}`))
            ),
            O.some(C.doc.hr()),
        ],
        A.compact,
        foldString

    );
}
