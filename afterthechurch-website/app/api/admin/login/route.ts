import {NextResponse} from 'next/server';import {setAdminCookie} from '@/lib/auth';
export async function POST(req:Request){const form=await req.formData();if(form.get('password')!==process.env.ADMIN_PASSWORD)return NextResponse.redirect(new URL('/admin?error=1',req.url),303);await setAdminCookie();return NextResponse.redirect(new URL('/admin',req.url),303)}
