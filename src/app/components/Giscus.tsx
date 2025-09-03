'use client'

import React, { useEffect, useRef } from 'react'

interface GiscusProps {
    repo: string
    repoId: string
    category: string
    categoryId: string
    mapping: 'url' | 'title' | 'og:title' | 'specific' | 'number' | 'pathname'
    theme?: 'light' | 'dark' | 'preferred_color_scheme'
    strict?: '0' | '1'
    reactionsEnabled?: '0' | '1'
    emitMetadata?: '0' | '1'
    inputPosition?: 'top' | 'bottom'
    lang?: string
}

export function Giscus({
    repo,
    repoId,
    category,
    categoryId,
    mapping,
    theme = 'preferred_color_scheme',
    strict = '0',
    reactionsEnabled = '1',
    emitMetadata = '0',
    inputPosition = 'top',
    lang = 'en'
}: GiscusProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://giscus.app/client.js'
        script.setAttribute('data-repo', repo)
        script.setAttribute('data-repo-id', repoId)
        script.setAttribute('data-category', category)
        script.setAttribute('data-category-id', categoryId)
        script.setAttribute('data-mapping', mapping)
        script.setAttribute('data-strict', strict)
        script.setAttribute('data-reactions-enabled', reactionsEnabled)
        script.setAttribute('data-emit-metadata', emitMetadata)
        script.setAttribute('data-input-position', inputPosition)
        script.setAttribute('data-theme', theme)
        script.setAttribute('data-lang', lang)
        script.setAttribute('data-loading', 'lazy');
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true

        if (containerRef.current) {
            containerRef.current.innerHTML = ''
            containerRef.current.appendChild(script)
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = ''
            }
        }
    }, [repo, repoId, category, categoryId, mapping, theme, strict, reactionsEnabled, emitMetadata, inputPosition, lang])

    return <div ref={containerRef} />
}
