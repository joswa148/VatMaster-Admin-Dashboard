const BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';

async function req(method, path, body) {
    const opts = { method, headers: { 'Content-Type': 'application/json' } };
    if (body) opts.body = JSON.stringify(body);
    const res = await fetch(`${BASE}${path}`, opts);
    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        const message = err.message || err.error || res.statusText;
        throw new Error(message);
    }
    return res.json();
}

export const whatsappAPI = {
    getGlobal:       ()            => req('GET',    '/api/whatsapp/global'),
    updateGlobal:    (id, data)    => req('PUT',    `/api/whatsapp/global/${id}`, data),
    getOverrides:    ()            => req('GET',    '/api/whatsapp/overrides'),
    createOverride:  (data)        => req('POST',   '/api/whatsapp/overrides', data),
    updateOverride:  (id, data)    => req('PUT',    `/api/whatsapp/overrides/${id}`, data),
    deleteOverride:  (id)          => req('DELETE', `/api/whatsapp/overrides/${id}`),
    getRouting:      (path)        => req('GET',    `/api/whatsapp/routing?path=${encodeURIComponent(path)}`),
};

export const blogAPI = {
    getPosts:    ()           => req('GET',    '/api/blog/posts'),
    createPost:  (data)       => req('POST',   '/api/blog/posts', data),
    updatePost:  (id, data)   => req('PUT',    `/api/blog/posts/${id}`, data),
    deletePost:  (id)         => req('DELETE', `/api/blog/posts/${id}`),
};

export const categoryAPI = {
    getAll:  ()           => req('GET',    '/api/categories'),
    create:  (data)       => req('POST',   '/api/categories', data),
    update:  (id, data)   => req('PUT',    `/api/categories/${id}`, data),
    delete:  (id)         => req('DELETE', `/api/categories/${id}`),
};

export const pricingAPI = {
    getAll:  ()                   => req('GET',    '/api/pricing'),
    create:  (data)               => req('POST',   '/api/pricing', data),
    update:  (serviceId, data)    => req('PUT',    `/api/pricing/${serviceId}`, data),
    delete:  (serviceId)          => req('DELETE', `/api/pricing/${serviceId}`),
};

export const metaAPI = {
    getAll:  ()              => req('GET', '/api/meta'),
    update:  (pageId, data)  => req('PUT', `/api/meta/${pageId}`, data),
};

export const authAPI = {
    login: (username, password) => req('POST', '/api/auth/login', { username, password }),
};
