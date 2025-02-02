import React, { useCallback } from 'react';
import { useSidebar } from '../../../hooks/Sidebar';
import ContentPagination from '../../../components/ContentPagination';
import Covers from '../../../components/Covers';

const BoasVindas: React.FC = () => {
    const {setContent, setSidebarVisibility} = useSidebar();

    const handleClick = useCallback((component: JSX.Element) => {
      setContent(component);
      setSidebarVisibility(true);
    }, [setContent, setSidebarVisibility]);

    return (
        <a-entity id="BoasVindas" room_name="bem vindo">
            {/* <!--NavMesh --> */}
            <a-plane id="Corredor_BoasVindas" position="0.020 0.59 9.200" scale="1.390 25.960 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
            <a-plane id="BoasVindas-NavMesh" position="0.020 0.59 -4.160" scale="8.990 1.410 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
            <a-plane id="BoasVindas_Memorias_Connection" position="5.15 0.59 -4.16" scale="2.4 1.5 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>
            <a-plane id="BoasVindas_Infantis_Connection" position="-5.25 0.59 -4.21" scale="2.4 1.5 1" navigation_collider class="collidable" rotation="-90 0 0" mixin="navMeshMaterial"></a-plane>

            {/* <!--NavMesh Occluders--> */}
            <a-box id="BoasVindas_Occluder" position="0.06 0.85 -5.18" scale="1.916 0.502 0.638" class="collidable" mixin="occluderMaterial"></a-box>

            {/* <!--Imagens dos totens--> */}
            <Covers contentType="boas_vindas" />

            {/* <!--HotSpots--> */}
            <a-entity id="boasvindas_hotspot_01" onClick={() => handleClick(<ContentPagination contentId="YK7_XBAAACYAYEN3" />)} contentType="0" scale="0.5 0.5 1" mixin="hotspotMixin" class="collidable" position="-3.3 3 -4.1"></a-entity> 
            <a-entity id="boasvindas_hotspot_02" onClick={() => handleClick(<ContentPagination contentId="YK7_dhAAACQAYEP0" />)} contentType="0" scale="0.5 0.5 1" mixin="hotspotMixin" class="collidable" position="0.05 3 -6.83"></a-entity>
            <a-entity id="boasvindas_hotspot_03" onClick={() => handleClick(<ContentPagination contentId="YK7_mhAAACQAYESU" />)} contentType="0" scale="0.5 0.5 1" mixin="hotspotMixin" class="collidable" position="3.3 3 -4.1"></a-entity>

            {/* <!--CloseCameras--> */}
            <a-camera id="boasvindas_closeCam_01" active="false" class="closeCameras" position="0.21 4.74 -5.06" rotation="-1.55 357 0.00"></a-camera>
            <a-camera id="boasvindas_closeCam_02" active="false" class="closeCameras" position="1.45 4.47 -4.29" rotation="0.44 267.36 0.00"></a-camera>
            <a-camera id="boasvindas_closeCam_03" active="false" class="closeCameras" position="-1.51 4.67 -4.09" rotation="-0.44 87.36 0.00"></a-camera>
        </a-entity>
    );
}

export default BoasVindas