"use client";

import { useRouter } from 'next/navigation';
import Button from '@mui/material/Button';

export default function Login() {

    const router = useRouter();

    return (
      <>
        <Button variant="outlined" onClick={() => router.push('/home')}>Login</Button>
      </>
    )
  }